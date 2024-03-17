public class Student extends Person{
    private int studentNumber;
    private double studentScore;
    

    public Student(String name, String lastname, int age, int studentNumber, double studentScore) {
        super(name, lastname, age);
        this.studentNumber = studentNumber;
        this.studentScore = studentScore;
    }
    
    public void showData() {
        System.out.println("Name is: "+Student.this.getName());
        System.out.println("Lastname is: "+Student.this.getLastname());
        System.out.println("Age is: "+Student.this.getAge());
        System.out.println("Student Number is: "+Student.this.getStudentNumber());
        System.out.println("Student Score is: "+Student.this.getStudentScore());
    }


    public int getStudentNumber() {
        return this.studentNumber;
    }

    public void setStudentNumber(int studentNumber) {
        this.studentNumber = studentNumber;
    }

    public double getStudentScore() {
        return this.studentScore;
    }

    public void setStudentScore(double studentScore) {
        this.studentScore = studentScore;
    }

}
