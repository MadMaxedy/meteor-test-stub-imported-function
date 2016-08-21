//module_to_test.js
import { foo } from './exported_function.js'
export function bar() { 
	return foo(); 
}