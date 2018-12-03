
def decode_text(text):
    decoders = ["utf-8", "Windows-1252"]
    for decoder in decoders:
        try:
            return text.decode(decoder)
        except UnicodeDecodeError:
            continue
    return text.decode("utf-8", "ignore")  # Ignore not compatible characters


def load(path, binary=False):
    with open(path, 'rb') as handle:
        tmp = handle.read()
        return tmp if binary else decode_text(tmp)


def replace_in_file(file_path, search, replace, strict=True):
    content = load(file_path)
    if -1 == content.find(search):
        message = "replace_in_file didn't find pattern '%s' in '%s' file." % (search, file_path)
        if strict:
            raise Exception(message)
        else:
            print(message)
    content = content.replace(search, replace)
    content = content.encode("utf-8")
    with open(file_path, "wb") as handle:
        handle.write(content)


def change_version(new_version):
    contents = load("index.html")
    token = '<span class="dl-version">'
    i = contents.find(token, 1)
    j = contents[i:].find('</span>', 1) + i
    old_version = contents[(i + len(token)):j]
    if "." not in old_version:
        raise Exception("Last version not found: %s" % old_version)
    replace_in_file("index.html", '<span class="dl-version">%s</span>' % old_version,
                    '<span class="dl-version">%s</span>' % new_version)

    replace_in_file("downloads.html", ' %s' % old_version,
                    ' %s' % new_version)

    replace_in_file("downloads.html", '_%s' % old_version.replace(".", "_"),
                    '_%s' % new_version.replace(".", "_"))


if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(description='Changes installer version')
    parser.add_argument('new_version', help='Client new version')
    args = parser.parse_args()

    change_version(args.new_version)
