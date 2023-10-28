import os

# get current directory
dir_path = os.path.dirname(os.path.realpath(__file__))

# loop through files in directory
for file in os.listdir(dir_path):
    # check if file is a png
    if file.endswith(".png"):
        # run cwebp command on file
        os.system(f"cwebp -q 70 {file} -o {os.path.splitext(file)[0]}.webp")
        
        # delete png file
        os.remove(file)
