@echo off
title Escolha de Teste de Performance
:inicio
echo =====================================
echo Escolha um Teste de Performance
echo =====================================
echo 1. Smoke Test - Realizar login
echo 2. Smoke Test - Listar usuários
echo 3. Smoke Test - Listar Produtos
echo 4. Smoke Test - Listar Carrinhos
echo 5. Smoke Test - Fluxo
echo 6. Load Test - Realizar Login
echo 7. Load Test - Listar Usuários
echo 8. Load Test - Listar Produtos
echo 9. Load Test - Listar Carrinhos
echo 10. Load Test - Fluxo
echo 11. Soak Test - Realizar Login
echo 12. Soak Test - Listar Usuarios
echo 13. Soak Test - Listar Produtos
echo 14. Soak Test - Listar Carrinhos
echo 15. Soak Test - Fluxo
echo 16. Spike Test - Realizar Login
echo 17. Spike Test - Listar Usuários
echo 18. Spike Test - Listar Produtos
echo 19. Spike Test - Listar Carrinhos
echo 20. Spike Test - Fluxo
echo 21. Stress Test - Realizar Login
echo 22. Stress Test - Listar Usuários
echo 23. Stress Test - Listar Produtos
echo 24. Stress Test - Listar Carrinhos
echo 25. Stress Test - Fluxo
echo 26. Sair
echo =====================================
set /p escolha="Digite o numero da sua escolha: "

if %escolha%==1 (
    cd /d "%~dp0"
    k6 run tests/login/smoke/post.js
) else if %escolha%==2 (
    cd /d "%~dp0"
    k6 run tests/usuarios/smoke/get.js
) else if %escolha%==3 (
    cd /d "%~dp0"
    k6 run tests/produtos/smoke/get.js
) else if %escolha%==4 (
    cd /d "%~dp0"
    k6 run tests/carrinhos/smoke/get.js
) else if %escolha%==5 (
    cd /d "%~dp0"
    k6 run tests/fluxo/smoke/principal.js
)else if %escolha%==6 (
    cd /d "%~dp0"
    k6 run tests/login/load/post.js
) else if %escolha%==7 (
    cd /d "%~dp0"
    k6 run tests/usuarios/load/get.js
) else if %escolha%==8 (
    cd /d "%~dp0"
    k6 run tests/produtos/load/get.js
) else if %escolha%==9 (
    cd /d "%~dp0"
    k6 run tests/carrinhos/load/get.js
) else if %escolha%==10 (
    cd /d "%~dp0"
    k6 run tests/fluxo/load/principal.js
)else if %escolha%==11 (
    cd /d "%~dp0"
    k6 run tests/login/soak/post.js
) else if %escolha%==12 (
    cd /d "%~dp0"
    k6 run tests/usuarios/soak/get.js
) else if %escolha%==13 (
    cd /d "%~dp0"
    k6 run tests/produtos/soak/get.js
) else if %escolha%==14 (
    cd /d "%~dp0"
    k6 run tests/carrinhos/soak/get.js
) else if %escolha%==15 (
    cd /d "%~dp0"
    k6 run tests/fluxo/soak/principal.js
)else if %escolha%==16 (
    cd /d "%~dp0"
    k6 run tests/login/spike/post.js
) else if %escolha%==17 (
    cd /d "%~dp0"
    k6 run tests/usuarios/spike/get.js
) else if %escolha%==18 (
    cd /d "%~dp0"
    k6 run tests/produtos/spike/get.js
) else if %escolha%==19 (
    cd /d "%~dp0"
    k6 run tests/carrinhos/spike/get.js
) else if %escolha%==20 (
    cd /d "%~dp0"
    k6 run tests/fluxo/spike/principal.js
)else if %escolha%==21 (
    cd /d "%~dp0"
    k6 run tests/login/stress/post.js
) else if %escolha%==22 (
    cd /d "%~dp0"
    k6 run tests/usuarios/stress/get.js
) else if %escolha%==23 (
    cd /d "%~dp0"
    k6 run tests/produtos/stress/get.js
) else if %escolha%==24 (
    cd /d "%~dp0"
    k6 run tests/carrinhos/stress/get.js
) else if %escolha%==25 (
    cd /d "%~dp0"
    k6 run tests/fluxo/stress/principal.js
) else if %escolha%==26 (
    echo Saindo...
    exit
) else (
    echo Escolha inválida. Tente novamente.
    pause
    goto :inicio
)
pause
goto :inicio