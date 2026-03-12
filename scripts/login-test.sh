#!/bin/bash
# Create test login JSON and test
cat > /tmp/login.json << 'EOF'
{"email":"admin@test.com","password":"Admin123!"}
EOF

echo "=== JSON content ==="
cat /tmp/login.json

echo ""
echo "=== Login test ==="
curl -s -X POST http://localhost/api/users/login \
  -H 'Content-Type: application/json' \
  -d @/tmp/login.json

echo ""
echo "=== Port 80 test ==="
curl -s -o /dev/null -w "HTTP:%{http_code}" http://localhost/admin
echo ""
echo "=== Done ==="
