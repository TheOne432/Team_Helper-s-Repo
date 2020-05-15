
@echo off
echo Starting..
:main 
node ShardManager.js
echo Restarting Bot..
TIMEOUT /T 120
goto main