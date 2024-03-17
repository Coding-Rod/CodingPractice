from PyQt5 import QtCore, QtGui, QtWidgets
from PyQt5.QtWidgets import QMessageBox

class Ui_MainWindow:
    def __init__(self, MainWindow):
        self.MainWindow = MainWindow
        self.user_text = ""

        # styles
        f = open("./css/label.css", "r")
        self.label_style = f.read()
        
        # setUp UI
        self.setupUi()

    def showValues(self):
        # print(f"Text: {self.lineEdit.text()}")
        # print(f"Checkbox: {self.checkBox.isChecked()}")
        msg = QMessageBox()
        msg.setIcon(QMessageBox.Information)
        msg.setText(f"Text: {self.lineEdit.text()}\n"+f"Checkbox: {self.checkBox.isChecked()}")
        # msg.setInformativeText('More information')
        msg.setWindowTitle("Información")
        msg.exec_()

    def new_text(self, text: str):
        self.user_text = text
        self.retranslateUi()

    def setupUi(self):
        self.MainWindow.setObjectName("MainWindow")
        self.MainWindow.resize(400, 300)

        self.centralwidget = QtWidgets.QWidget(self.MainWindow)
        self.centralwidget.setObjectName("centralwidget")
        self.MainWindow.setCentralWidget(self.centralwidget)

        self.pushButton = QtWidgets.QPushButton(self.centralwidget)
        self.pushButton.setGeometry(QtCore.QRect(230, 230, 89, 25))
        self.pushButton.setObjectName("pushButton")
        self.pushButton.clicked.connect(self.showValues)
        self.pushButton.clicked.connect(lambda: self.new_text(self.lineEdit.text()))

        self.label = QtWidgets.QLabel(self.centralwidget)
        self.label.setGeometry(QtCore.QRect(60, 30, 67, 17))
        self.label.setStyleSheet("font-weight: 800;")
        self.label.setCursor(QtGui.QCursor(QtCore.Qt.PointingHandCursor))
        self.label.setObjectName("label")

        self.horizontalSlider = QtWidgets.QSlider(self.centralwidget)
        self.horizontalSlider.setGeometry(QtCore.QRect(140, 90, 160, 16))
        self.horizontalSlider.setOrientation(QtCore.Qt.Horizontal)
        self.horizontalSlider.setObjectName("horizontalSlider")

        self.checkBox = QtWidgets.QCheckBox(self.centralwidget)
        self.checkBox.setGeometry(QtCore.QRect(60, 190, 92, 23))
        self.checkBox.setObjectName("checkBox")

        self.label_2 = QtWidgets.QLabel(self.centralwidget)
        self.label_2.setGeometry(QtCore.QRect(60, 90, 67, 16))
        self.label_2.setObjectName("label_2")
        self.label_2.setStyleSheet(self.label_style);

        self.lineEdit = QtWidgets.QLineEdit(self.centralwidget)
        self.lineEdit.setGeometry(QtCore.QRect(140, 140, 100, 20))
        self.lineEdit.setObjectName("lineEdit")

        self.label_3 = QtWidgets.QLabel(self.centralwidget)
        self.label_3.setGeometry(QtCore.QRect(60, 140, 67, 17))
        self.label_3.setObjectName("label_3")
        self.label_3.setStyleSheet(self.label_style);

        self.menubar = QtWidgets.QMenuBar(self.MainWindow)
        self.menubar.setGeometry(QtCore.QRect(0, 0, 800, 22))
        self.menubar.setObjectName("menubar")        
        self.MainWindow.setMenuBar(self.menubar)
        
        self.statusbar = QtWidgets.QStatusBar(self.MainWindow)
        self.statusbar.setObjectName("statusbar")
        self.MainWindow.setStatusBar(self.statusbar)
        
        self.label_4 = QtWidgets.QLabel(self.centralwidget)
        self.label_4.setGeometry(QtCore.QRect(200, 20, 70, 17))
        self.label_4.setObjectName("label_4")

        self.retranslateUi()
        QtCore.QMetaObject.connectSlotsByName(self.MainWindow)

    def retranslateUi(self):
        _translate = QtCore.QCoreApplication.translate
        self.MainWindow.setWindowTitle(_translate("MainWindow", "Mi Interfáz de usuario"))
        self.pushButton.setText(_translate("MainWindow", "showValues"))
        self.label.setText(_translate("MainWindow", "Form"))
        self.checkBox.setText(_translate("MainWindow", "Check"))
        self.label_2.setText(_translate("MainWindow", "Slider"))
        self.label_3.setText(_translate("MainWindow", "Field 1"))
        self.label_4.setText(_translate("MainWindow", self.user_text))


if __name__ == "__main__":
    import sys
    app = QtWidgets.QApplication(sys.argv)
    MainWindow = QtWidgets.QMainWindow()
    ui = Ui_MainWindow(MainWindow)
    MainWindow.show()
    sys.exit(app.exec_())
