package a_strings;

public class A_StringPool {
	public static void main(String[] args) {
		/** 1. Create s1 and s2 and explain why '==' does not work */
		String s1 = new String("Hello");
		String s2 = "Hello";
		System.out.println("s1 == s2 : " + (s1 == s2));
		
		/** 2. Create s3 and explain why '==' does not work with s1 and s2 after concatenation */
		String s3 = "Hellos";
		s1 = s1 + "s";
		System.out.println("s1 :" + s1);
		System.out.println("s3 : " + s3);
		System.out.println("s1 == s3 : " + (s1 == s3));
		
		s2 += "s";
		System.out.println("s2 :" + s2);
		System.out.println("s3 : " + s3);
		System.out.println("s2 == s3 : " + (s2 == s3));
		
		/** 3. Create s4 and explain String pool with s3 and s4 */
		String s4 = "Hellos";
		System.out.println("s3 :" + s3);
		System.out.println("s4 : " + s4);
		System.out.println("s3 == s4 : " + (s3 == s4));
	}
}
