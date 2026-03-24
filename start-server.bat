@echo off
:: Get the directory where this .bat file lives
cd /d "%~dp0"

echo ============================================
echo   YaxshiNiyat - Start Server
echo ============================================

:: Start PostgreSQL service (if not already running)
echo [1/3] Starting PostgreSQL...
net start postgresql-x64-16 2>nul
if %ERRORLEVEL% EQU 0 (
    echo       PostgreSQL started.
) else (
    echo       PostgreSQL already running.
)

:: Start nginx
echo [2/3] Starting nginx...
taskkill /f /im nginx.exe >nul 2>&1
cd /d C:\nginx\nginx-1.26.3
start nginx
cd /d "%~dp0"
echo       nginx started on port 80.

:: Start PM2 with ecosystem
echo [3/3] Starting PM2...
call pm2 start ecosystem.config.cjs
call pm2 save

echo ============================================
echo   All services started!
echo   App: http://localhost
echo   Admin: http://localhost/admin
echo ============================================
pause
