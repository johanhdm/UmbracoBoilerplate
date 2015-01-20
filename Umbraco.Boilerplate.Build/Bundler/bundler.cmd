@echo off
pushd "%~dp0"

:: process Content and Scripts by default
if "%*" == "" (
    node bundler.js  ../../Umbraco.Boilerplate.Web/Static/Styles ../../Umbraco.Boilerplate.Web/Static/Scripts #skipmin
) else (
    node bundler.js %*
)

popd

exit %ERRORLEVEL%