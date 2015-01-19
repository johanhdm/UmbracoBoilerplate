@echo off
pushd "%~dp0"

grunt css

popd

exit %ERRORLEVEL%