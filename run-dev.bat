@echo off
title INITIAL Website - Dev Server
cd /d "%~dp0"
echo Starting Next.js dev server at http://localhost:3000 ...
call npm run dev
pause
