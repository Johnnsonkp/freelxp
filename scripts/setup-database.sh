#!/bin/bash

# Setup script for PostgreSQL database
# Creates the job_tracker database if it doesn't exist and runs migrations

set -e  # Exit on error

echo "Setting up Job Tracker PostgreSQL database..."

# Check if PostgreSQL is installed
if ! command -v psql &> /dev/null; then
    echo " PostgreSQL is not installed. Please install it first:"
    echo "  macOS: brew install postgresql@14"
    echo "  Ubuntu: sudo apt-get install postgresql postgresql-contrib"
    exit 1
fi

# Database configuration
DB_HOST="${POSTGRES_HOST:-localhost}"
DB_PORT="${POSTGRES_PORT:-5432}"
DB_NAME="${POSTGRES_DB:-job_tracker}"
DB_USER="${POSTGRES_USER:-$USER}"  # Use current user by default on macOS
DB_PASSWORD="${POSTGRES_PASSWORD:-}"  # Empty password for local trust auth


# Connection URL
# DATABASE_URL="postgresql://$DB_USER:$DB_PASSWORD@$DB_HOST:$DB_PORT/$DB_NAME"
DATABASE_URL="postgres://$DB_USER:$DB_PASSWORD@$DB_HOST:$DB_PORT/$DB_NAME"

echo "Database: $DB_NAME"
echo "User: $DB_USER"
echo "Host: $DB_HOST:$DB_PORT"
echo "DATABASE_URL: $DATABASE_URL"
echo ""

# Export password for psql (if provided)
if [ -n "$DB_PASSWORD" ]; then
    export PGPASSWORD="$DB_PASSWORD"
fi

# Determine which database to connect to for checking/creating
# Try to use the user's default database first, fall back to template1
ADMIN_DB="$DB_USER"

# Check if database exists
echo "Checking if database '$DB_NAME' exists..."
if psql -h "$DB_HOST" -p "$DB_PORT" -U "$DB_USER" -d "$ADMIN_DB" -lqt 2>/dev/null | cut -d \| -f 1 | grep -qw "$DB_NAME"; then
    echo "✅ Database '$DB_NAME' already exists."
else
    # Try with template1 if user database doesn't work
    if ! psql -h "$DB_HOST" -p "$DB_PORT" -U "$DB_USER" -d "$ADMIN_DB" -c "SELECT 1" &>/dev/null; then
        ADMIN_DB="template1"
    fi
    
    echo "Database does not exist. Creating database '$DB_NAME'..."
    psql -h "$DB_HOST" -p "$DB_PORT" -U "$DB_USER" -d "$ADMIN_DB" -c "CREATE DATABASE $DB_NAME;"
    echo "✅ Database '$DB_NAME' created successfully!"
fi

# Run migrations (schema)
echo ""
echo "Running migrations..."
if [ -f "lib/db/schema.sql" ]; then
    psql -h "$DB_HOST" -p "$DB_PORT" -U "$DB_USER" -d "$DB_NAME" -f lib/db/schema.sql
    echo " Migrations completed successfully!"
else
    echo "  No schema file found at lib/db/schema.sql"
fi

# Clear password from environment
if [ -n "$PGPASSWORD" ]; then
    unset PGPASSWORD
fi

echo ""
echo " Database setup complete!"
echo ""
echo "Connection URL:"
echo "  $DATABASE_URL"
echo ""
echo "Add this to your .env.local file:"
echo "  DATABASE_URL=$DATABASE_URL"
echo ""
