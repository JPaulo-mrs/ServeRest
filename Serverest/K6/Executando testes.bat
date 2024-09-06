@echo off
title Escolha de Teste de Performance
:inicio
echo =====================================
echo Escolha um Teste de Performance
echo =====================================
echo 1. Smoke Test - Realizar login
echo 2. Smoke Test - Listar usuários
echo 3. Smoke Test - Listar Produtos
echo 4. Smoke Test - Fluxo
echo 5. Load Test - Realizar Login
echo 6. Load Test - Listar Usuários
echo 7. Load Test - Listar Produtos
echo 8. Load Test - Fluxo
echo 9. Soak Test - Realizar Login
echo 10. Soak Test - Realizar Login
echo 11. Soak Test - Listar Produtos
echo 12. Soak Test - Fluxo
echo 13. Stress Test - Realizar Login
echo 14. Stress Test - Listar Usuários
echo 15. Stress Test - Listar Produtos
echo 16. Stress Test - Fluxo
echo 17. Spike Test - Realizar Login
echo 18. Spike Test - Listar Usuários
echo 19. Spike Test - Listar Produtos
echo 20. Spike Test - Fluxo
echo 21. Sair
echo =====================================
set /p escolha="Digite o numero da sua escolha: "

if %escolha%==1 (
    cd /d "%~dp0"
    k6 run Testes/smokeTest/smokeLogin.js
) else if %escolha%==2 (
    cd /d "%~dp0"
    k6 run Testes/smokeTest/smokeUsuarios.js
) else if %escolha%==3 (
    cd /d "%~dp0"
    k6 run Testes/smokeTest/smokeProdutos.js
) else if %escolha%==4 (
    cd /d "%~dp0"
    k6 run Testes/smokeTest/smokeFluxo.js
) else if %escolha%==5 (
    cd /d "%~dp0"
    k6 run Testes/loadTest/loadLogin.js
) else if %escolha%==6 (
    cd /d "%~dp0"
    k6 run Testes/loadTest/loadUsuarios.js
) else if %escolha%==7 (
    cd /d "%~dp0"
    k6 run Testes/loadTest/loadProdutos.js
) else if %escolha%==8 (
    cd /d "%~dp0"
    k6 run Testes/loadTest/loadFluxo.js
) else if %escolha%==9 (
    cd /d "%~dp0"
    k6 run Testes/soakTest/soakLogin.js
) else if %escolha%==10 (
    cd /d "%~dp0"
    k6 run Testes/soakTest/soakUsuarios.js
) else if %escolha%==11 (
    cd /d "%~dp0"
    k6 run Testes/soakTest/soakProdutos.js
) else if %escolha%==12 (
    cd /d "%~dp0"
    k6 run Testes/soakTest/soakFluxo.js
        k6 run Testes/smokeTest/smokeFluxo.js
) else if %escolha%==13 (
    cd /d "%~dp0"
    k6 run Testes/spikeTest/spikeLogin.js
) else if %escolha%==14 (
    cd /d "%~dp0"
    k6 run Testes/spikeTest/spikeUsuarios.js
) else if %escolha%==15 (
    cd /d "%~dp0"
    k6 run Testes/spikeTest/spikeProdutos.js
) else if %escolha%==16 (
    cd /d "%~dp0"
    k6 run Testes/spikeTest/spikeFluxo.js
) else if %escolha%==17 (
    cd /d "%~dp0"
    k6 run Testes/stressTest/stressLogin.js
) else if %escolha%==18 (
    cd /d "%~dp0"
    k6 run Testes/stressTest/stressUsuarios.js
) else if %escolha%==19 (
    cd /d "%~dp0"
    k6 run Testes/stressTest/stressProdutos.js
) else if %escolha%==20 (
    cd /d "%~dp0"
    k6 run Testes/stressTest/stressFluxo.js
) else if %escolha%==21 (
    echo Saindo...
    exit
) else (
    echo Escolha inválida. Tente novamente.
    pause
    goto :inicio
)
pause
goto :inicio