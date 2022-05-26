package b_staticvsinstance;

/*
 * Variables and methods that are marked as 'static'
 * are shared across all instances (objects) of a class.
 * 
 * You can access static fields and methods without 
 * needing an object created by calling the class directly.
 */
public class A_Account {
	/** 1. Create static and instance variables. Explain difference between static and instance */
	// static variable
	static int count;
	
	// instance variables
	String accountHolder;
	long accountId;
	double accountValue;
	
	/** 2. Create Account constructor and explain */
	// this constructor now increases 'count' each time a new Account is created
	public A_Account() {
		count++;
	}
	
	/** 3. Create and explain static vs instance methods */
	// static method
	public static void staticAccountMethod() {
		System.out.println("This method is static to the Account class.");
//		System.out.println("accountHolder is: " + accountHolder); // error - cannot reference non-static field in static method
	}
	
	// instance method
	public void printAccountInfo() {
		System.out.println("AccountHolder [instance]: " + accountHolder
				+ "\nAccountId [instance]: " + accountId
				+ "\nAccountValue [instance]: " + accountValue
				+ "\nCount [static]: " + count);
	}
	
}
