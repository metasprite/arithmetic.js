(function() {
	var arithmetic = {
		// Safe add
		add: function(a, b) {
			// Make sure a is not infinity
			if (a == Infinity) {
				return "ERROR: a is infinity!";
			// Make sure b is not infinity
			} else if (b == Infinity) {
				return "ERROR: b is infinity!";
			// Make sure a is otherwise not not a number
			} else if (isNaN(a)) {
				return "ERROR: a is not a number!";
			// Make sure b is otherwise not not a number
			} else if (isNaN(b)) {
				return "ERROR: b is not a number!";
			// Make sure a is not so high as to be dangerous
			} else if (a > Number.MAX_SAFE_INTEGER) {
				return "ERROR: a is too high to be safe!";
			// Make sure b is not so high as to be dangerous
			} else if (b > Number.MAX_SAFE_INTEGER) {
				return "ERROR: b is too high to be safe!";
			// Make sure a is not so low as to be dangerous
			} else if (a < Number.MIN_SAFE_INTEGER) {
				return "ERROR: a is too low to be safe!";
			// Make sure b is not so low as to be dangerous
			} else if (b < Number.MIN_SAFE_INTEGER) {
				return "ERROR: a is too low to be safe!";
			} else {
				// We can now do the calculation
				return (a + b);
			}
		},
		// Safe subtract
		subtract: function(a, b) {
			// Make sure a is not infinity
			if (a == Infinity) {
				return "ERROR: a is infinity!";
			// Make sure b is not infinity
			} else if (b == Infinity) {
				return "ERROR: b is infinity!";
			// Make sure a is otherwise not not a number
			} else if (isNaN(a)) {
				return "ERROR: a is not a number!";
			// Make sure b is otherwise not not a number
			} else if (isNaN(b)) {
				return "ERROR: b is not a number!";
			// Make sure a is not so high as to be dangerous
			} else if (a > Number.MAX_SAFE_INTEGER) {
				return "ERROR: a is too high to be safe!";
			// Make sure b is not so high as to be dangerous
			} else if (b > Number.MAX_SAFE_INTEGER) {
				return "ERROR: b is too high to be safe!";
			// Make sure a is not so low as to be dangerous
			} else if (a < Number.MIN_SAFE_INTEGER) {
				return "ERROR: a is too low to be safe!";
			// Make sure b is not so low as to be dangerous
			} else if (b < Number.MIN_SAFE_INTEGER) {
				return "ERROR: a is too low to be safe!";
			} else {
				// We can now do the calculation
				return (a - b);
			}
		},
		// Safe multiply
		multiply: function(a, b) {
			// Make sure a is not infinity
			if (a == Infinity) {
				return "ERROR: a is infinity!";
			// Make sure b is not infinity
			} else if (b == Infinity) {
				return "ERROR: b is infinity!";
			// Make sure a is otherwise not not a number
			} else if (isNaN(a)) {
				return "ERROR: a is not a number!";
			// Make sure b is otherwise not not a number
			} else if (isNaN(b)) {
				return "ERROR: b is not a number!";
			// Make sure a is not so high as to be dangerous
			} else if (a > Number.MAX_SAFE_INTEGER) {
				return "ERROR: a is too high to be safe!";
			// Make sure b is not so high as to be dangerous
			} else if (b > Number.MAX_SAFE_INTEGER) {
				return "ERROR: b is too high to be safe!";
			// Make sure a is not so low as to be dangerous
			} else if (a < Number.MIN_SAFE_INTEGER) {
				return "ERROR: a is too low to be safe!";
			// Make sure b is not so low as to be dangerous
			} else if (b < Number.MIN_SAFE_INTEGER) {
				return "ERROR: a is too low to be safe!";
			} else {
				// We can now do the calculation
				return (a * b);
			}
		},
		// Safe divide
		divide: function(a, b) {
			// Make sure a is not infinity
			if (a == Infinity) {
				return "ERROR: a is infinity!";
			// Make sure b is not infinity
			} else if (b == Infinity) {
				return "ERROR: b is infinity!";
			// Make sure a is otherwise not not a number
			} else if (isNaN(a)) {
				return "ERROR: a is not a number!";
			// Make sure b is otherwise not not a number
			} else if (isNaN(b)) {
				return "ERROR: b is not a number!";
			// Make sure a is not so high as to be dangerous
			} else if (a > Number.MAX_SAFE_INTEGER) {
				return "ERROR: a is too high to be safe!";
			// Make sure b is not so high as to be dangerous
			} else if (b > Number.MAX_SAFE_INTEGER) {
				return "ERROR: b is too high to be safe!";
			// Make sure a is not so low as to be dangerous
			} else if (a < Number.MIN_SAFE_INTEGER) {
				return "ERROR: a is too low to be safe!";
			// Make sure b is not so low as to be dangerous
			} else if (b < Number.MIN_SAFE_INTEGER) {
				return "ERROR: a is too low to be safe!";
			// Make sure b is not 0
			} else if (b == 0) {
				return "ERROR: b is 0!";
			} else {
				// We can now do the calculation
				return (a / b);
			}
		},
		// BONUS: Safe power
		power: function(a, b) {
			// Make sure a is not infinity
			if (a == Infinity) {
				return "ERROR: a is infinity!";
			// Make sure b is not infinity
			} else if (b == Infinity) {
				return "ERROR: b is infinity!";
			// Make sure a is otherwise not not a number
			} else if (isNaN(a)) {
				return "ERROR: a is not a number!";
			// Make sure b is otherwise not not a number
			} else if (isNaN(b)) {
				return "ERROR: b is not a number!";
			// Make sure a is not so high as to be dangerous
			} else if (a > Number.MAX_SAFE_INTEGER) {
				return "ERROR: a is too high to be safe!";
			// Make sure b is not so high as to be dangerous
			} else if (b > Number.MAX_SAFE_INTEGER) {
				return "ERROR: b is too high to be safe!";
			// Make sure a is not so low as to be dangerous
			} else if (a < Number.MIN_SAFE_INTEGER) {
				return "ERROR: a is too low to be safe!";
			// Make sure b is not so low as to be dangerous
			} else if (b < Number.MIN_SAFE_INTEGER) {
				return "ERROR: a is too low to be safe!";
			} else {
				// We can now do the calculation
				return Math.pow(a, b);
			}
		}
	}
	return arithmetic;
}());
