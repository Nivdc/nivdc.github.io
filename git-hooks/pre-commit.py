import glob
import markdown2
import subprocess
from pathlib import Path


def main():
    article_folders = ['articles', 'drafts']
    for article_folder in article_folders:
        md_file_paths = glob.glob(f'./public/{article_folder}/*.md')
        for md_file_path in md_file_paths:
            file_content = read_file_content(md_file_path)
            html_file_path = md_file_path[:-3] + '.html'

            html_content = markdown2.markdown(file_content)

            filename = Path(md_file_path).stem
            html_content = f'<h1>{filename}</h1>\n' + html_content

            write_file_content(html_file_path, html_content)

            try:
                subprocess.run(['git', 'add', html_file_path], check=True)
            except Exception as e:
                print(f"An error occurred while generating or adding the file: {e}")
                exit(1)

def read_file_content(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        return file.read()

def write_file_content(file_path, content):
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(content)

# def get_modified_files():
#     result = subprocess.run(['git', 'diff', '--cached', '--name-only'], stdout=subprocess.PIPE, text=True)
#     modified_files = result.stdout.splitlines()
#     return modified_files

# # 使用函数并打印修改过的文件名
# for file in get_modified_files():
#     print(file)


if __name__ == '__main__':
    main()