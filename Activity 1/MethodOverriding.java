class A {
    void add(int a, int b) {
        System.out.println("Sum of two integers: " + (a + b));
    }

}
class B extends A {
    void add(int a, int b) {
        System.out.println("Sum of 2 integers: " + (a + b));
    }
    void add(int a, int b, int c) {
        System.out.println("Sum of 3 integers: " + (a + b + c));
    }

}

public class MethodOverriding {
    public static void main(String[] args) {
        B obj = new B();
        obj.add(5, 10);
        obj.add(5, 10, 15);

    }
}