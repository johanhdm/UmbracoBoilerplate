@echo off
pushd "%~dp0"

npm install
popd

exit %ERRORLEVEL%