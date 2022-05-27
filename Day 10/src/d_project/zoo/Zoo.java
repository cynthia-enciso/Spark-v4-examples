package d_project.zoo;

import java.util.ArrayList;

import d_project.animals.Animal;
import d_project.animals.Bird;
import d_project.animals.Mammal;
import d_project.animals.Reptile;

public class Zoo {
	
	private Exhibit[] exhibits; // may refactor to collection
	
	/* initialize zoo through either constructor or method: 
	 *  - create animals
	 *  - create exhibits
	 *  - update zoo's exhibits property
	 * 
	 * */
	
	/** 3. getters and setters. Setter optional. */
	public Exhibit[] getExhibits() {
		return exhibits;
	}

	public void setExhibits(Exhibit[] exhibits) {
		this.exhibits = exhibits;
	}
}
