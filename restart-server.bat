@echo off
:: Get the directory where this .bat file lives
cd /d "%~dp0"

echo ============================================
echo   YaxshiNiyat - Rebuild and Restart
echo ============================================

:: 1. Stop PM2 app
echo [1/5] Stopping PM2 app...
call pm2 stop yaxshiniyat 2>nul
echo       PM2 stopped.

:: 2. Stop nginx
echo [2/5] Stopping nginx...
taskkill /f /im nginx.exe >nul 2>&1
echo       nginx stopped.

:: 3. Build
echo [3/5] Building app (this may take a few minutes)...
set NODE_OPTIONS=--no-deprecation
call npx next build
if %ERRORLEVEL% NEQ 0 (
    echo       BUILD FAILED! Aborting.
    pause
    exit /b 1
)

:: 4. Copy static files
echo [4/5] Copying static files...
xcopy /E /Y /Q ".next\static" ".next\standalone\.next\static\" >nul
xcopy /E /Y /Q "public" ".next\standalone\public\" >nul
echo       Static files copied.

:: 5. Start everything
echo [5/5] Starting services...
cd /d C:\nginx\nginx-1.26.3
start nginx
cd /d "%~dp0"
call pm2 restart yaxshiniyat 2>nul || call pm2 start ecosystem.config.cjs
call pm2 save

echo ============================================
echo   Rebuild complete! All services running.
echo   App: http://localhost
echo   Admin: http://localhost/admin
echo ============================================
pause
