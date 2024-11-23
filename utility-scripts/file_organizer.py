import os
import shutil
import sys

def organize_files(directory):
    if not os.path.exists(directory):
        print(f"The directory '{directory}' does not exist.")
        return

    # file type categories
    file_types = {
        "Images": [".jpg", ".jpeg", ".png", ".gif"],
        "Documents": [".pdf", ".doc", ".docx", ".txt"],
        "Spreadsheets": [".xls", ".xlsx", ".csv"],
        "Videos": [".mp4", ".mov", ".avi"],
        "Archives": [".zip", ".tar", ".gz", ".rar"],
    }

    # folders for file types
    for folder in file_types.keys():
        folder_path = os.path.join(directory, folder)
        if not os.path.exists(folder_path):
            os.makedirs(folder_path)

    # moving files to appropriate folders
    for file in os.listdir(directory):
        file_path = os.path.join(directory, file)

        # skipping folders
        if os.path.isdir(file_path):
            continue

        # matching file extensions
        for folder, extensions in file_types.items():
            if file.lower().endswith(tuple(extensions)):
                shutil.move(file_path, os.path.join(directory, folder, file))
                print(f"Moved: {file} -> {folder}")
                break

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python file_organizer.py /path/to/directory")
    else:
        organize_files(sys.argv[1])
