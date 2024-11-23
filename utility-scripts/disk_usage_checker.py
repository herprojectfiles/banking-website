import shutil
import sys

def check_disk_usage(directory, threshold=100):
    total, used, free = shutil.disk_usage(directory)

    # converting to GB
    total_gb = total // (2**30)
    used_gb = used // (2**30)
    free_gb = free // (2**30)

    # calculating percentage usage
    percent_used = (used / total) * 100

    print(f"Disk Usage for {directory}:")
    print(f"  Total: {total_gb} GB")
    print(f"  Used: {used_gb} GB ({percent_used:.2f}%)")
    print(f"  Free: {free_gb} GB")

    # checking threshold
    if percent_used > threshold:
        print(f"Warning: Disk usage exceeds {threshold}%!")
    else:
        print("Disk usage is within acceptable limits.")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python disk_usage_checker.py /path/to/directory [threshold]")
    else:
        path = sys.argv[1]
        threshold = int(sys.argv[2]) if len(sys.argv) > 2 else 100
        check_disk_usage(path, threshold)
