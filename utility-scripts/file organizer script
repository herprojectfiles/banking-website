# organize_files.sh
#!/bin/bash

files=("report.txt" "photo.jpg" "script.sh" "data.csv")
for file in "${files[@]}"; do
    case "$file" in
        *.txt) echo "Moving $file to Text_Files folder" ;;
        *.jpg) echo "Moving $file to Images folder" ;;
        *.sh) echo "Moving $file to Scripts folder" ;;
        *.csv) echo "Moving $file to Data_Files folder" ;;
        *) echo "Unknown file type: $file" ;;
    esac
done

