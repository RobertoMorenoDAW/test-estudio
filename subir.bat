@echo off

git status
git add .
git commit -m "%date% %time%"
git push

echo.
echo =====================
echo PROCESO TERMINADO
echo =====================

pause