# This is a sample Python script.
import pyamaze as pyamaze
from pyamaze import maze
import sys


# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.


def print_hi(name):
    # Use a breakpoint in the code line below to debug your script.
    print(f'Hi, {name}')  # Press Ctrl+F8 to toggle the breakpoint.


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    print_hi('PyCharm')
    m = maze(50, 50)
    m.CreateMaze(saveMaze=True)
    # m.run()

    print(m.maze_map)
    sys.stdout.flush()
