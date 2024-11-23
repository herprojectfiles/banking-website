# disk_usage.sh
#!/bin/bash

disk_usage=85
threshold=80

if (( disk_usage > threshold )); then
    echo "Warning: Disk usage is at ${disk_usage}%, which exceeds the threshold!"
else
    echo "Disk usage is within safe limits (${disk_usage}%)."
fi

