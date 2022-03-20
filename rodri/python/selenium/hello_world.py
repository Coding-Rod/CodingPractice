# import unittest
# from pyunitreport import HTMLTestRunner
# from selenium import webdriver


# class HelloWorld(unittest.TestCase):

#     @classmethod
#     def setUp(cls):
#         cls.driver = webdriver.Chrome(executable_path='/usr/bin/chromedriver')
#         driver = cls.driver
#         driver.implicitly_wait(10)

#     def test_hello_world(self):
#         driver = self.driver
#         driver.get('http://www.platzi.com/')

#     def test_visit_wikipedia(self):
#         self.driver.get('https://www.wikipedia.org')

#     @classmethod
#     def tearDown(cls):
#         cls.driver.quit()

# if __name__ == "__main__":
#     unittest.main(verbosity=2)
