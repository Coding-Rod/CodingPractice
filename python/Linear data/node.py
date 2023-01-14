from mimetypes import init


class Node():
    def __init__(self,data, next=None):
        self.data = data
        self.next=next