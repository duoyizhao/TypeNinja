curl -XGET 'http://localhost:8080/' > testIndex.txt  

cmp --silent index.html testIndex.txt && echo '### SUCCESS: Server working as expected! ###' || echo '### WARNING: Server does not seem to be working as expected! ###'



