import './header.css';

const cpplang = [
    {
      id: 1,
     
      name: "auto",
      
      meaning:
        "The auto keyword declares automatic variables",
      Button_link :<a href="https://www.geeksforgeeks.org/storage-classes-in-c/#:~:text=auto%3A%20This%20is%20the%20default,(which%20defines%20their%20scope)." class="button_lang">click</a>
    },
    {
      id: 2 ,
     
      name: "break",
      
      meaning:
        "The break statement terminates the innermost loop immediately when it's encountered. It's also used to terminate the switch statement.",
      Button_link :<a href="https://www.geeksforgeeks.org/break-statement-cc/" class="button_lang">click</a>
    },   
    {
      id: 3,
     
      name: "case",
      
      meaning:
        "It is used when a blocks of code are to be executed in 'switch' depending on the case ",
      Button_link :<a href="https://www.geeksforgeeks.org/switch-statement-cc/" class="button_lang">click</a>
    },   
    {
      id: 4,
     
      name: "char",
      
      meaning:
        "The char keyword declares a character variable",
      Button_link :<a href="https://www.geeksforgeeks.org/strings-in-c-2/" class="button_lang">click</a>
    },   
    {
      id: 5,
     
      name: "const",
      
      meaning:
        "An identifier can be declared constant by using the const keyword",
      Button_link :<a href="https://www.geeksforgeeks.org/const-qualifier-in-c/" class="button_lang">click</a>
    },   
    {
      id: 6,
     
      name: "continue",
      
      meaning:
        "The continue statement skips the statements after it inside the loop for the iteration",
      Button_link :<a href="https://www.geeksforgeeks.org/continue-statement-cpp/" class="button_lang">click</a>
    },   
    {
      id: 7,
     
      name: "default",
      
      meaning:
        "The default statement is executed if no case constant-expression value is equal to the value of expression . If there's no default statement, and no case match is found, none of the statements in the switch body get executed. There can be at most one default statement",
      Button_link :<a href="https://www.geeksforgeeks.org/default-arguments-c/#:~:text=A%20default%20argument%20is%20a,argument%20with%20a%20default%20value.&text=When%20Function%20overloading%20is%20done%20along%20with%20default%20values." class="button_lang">click</a>
    },   
    {
      id: 8,
     
      name: "do",
      
      meaning:
        "The do-while statement lets you repeat a statement or compound statement until a specified expression becomes false.",
      Button_link :<a href="https://www.geeksforgeeks.org/c-c-do-while-loop-with-examples/" class="button_lang">click</a>
    },   
    {
      id: 9,
     
      name: "double",
      
      meaning:
        "Keywords double and float are used for declaring floating type variables",
      Button_link :<a href="https://www.geeksforgeeks.org/difference-float-double-c-cpp/" class="button_lang">click</a>
    },   
    {
      id: 10,
     
      name: "else",
      
      meaning:
        "In C programming, if and else are used to make decisions.",
      Button_link :<a href="https://www.geeksforgeeks.org/decision-making-c-c-else-nested-else/" class="button_lang">click</a>
    },   
    {
      id: 11,
     
      name: "enum",
      
      meaning:
        "Enumeration types are declared in C programming using keyword enum",
      Button_link :<a href="https://www.geeksforgeeks.org/enumeration-enum-c/" class="button_lang">click</a>
    },   
    {
      id: 12,
     
      name: "extern",
      
      meaning:
        "The extern keyword declares that a variable or a function has external linkage outside of the file it is declared",
      Button_link :<a href="https://www.geeksforgeeks.org/understanding-extern-keyword-in-c/" class="button_lang">click</a>
    },   
    {
      id: 13,
     
      name: "float",
      
      meaning:
        "Keywords double and float are used for declaring floating type variables.",
      Button_link :<a href="https://www.geeksforgeeks.org/difference-float-double-c-cpp/" class="button_lang">click</a>
    },   
    {
      id: 14,
     
      name: "for",
      
      meaning:
        "The for statement lets you repeat a statement or compound statement a specified number of times. The body of a for statement is executed zero or more times until an optional condition becomes false",
      Button_link :<a href="https://www.geeksforgeeks.org/c-c-for-loop-with-examples/" class="button_lang">click</a>
    },   
    {
      id: 15,
     
      name: "goto",
      
      meaning:
        "The goto statement is used to transfer control of the program to the specified label.",
      Button_link :<a href="https://www.geeksforgeeks.org/goto-statement-in-c-cpp/" class="button_lang">click</a>
    },   
    {
      id: 16,
     
      name: "if",
      
      meaning:
        "In C programming, if and else are used to make decisions.",
      Button_link :<a href="https://www.geeksforgeeks.org/c-c-if-else-statement-with-examples/" class="button_lang">click</a>
    },   
    {
      id: 17,
     
      name: "int",
      
      meaning:
        "",
      Button_link :<a href="https://www.geeksforgeeks.org/integer-promotions-in-c/" class="button_lang">click</a>
    },   
    {
      id: 18,
     
      name: "long",
      
      meaning:
        "In this program, the sizeof operator is used to find the size of int , long , long long , double and long double variables. As you can see, the size of long int and long double variables are larger than int and double variables, respectively.",
      Button_link :<a href="https://www.geeksforgeeks.org/working-of-keyword-long-in-c-programming/" class="button_lang">click</a>
    },   
    {
      id: 19,
     
      name: "register",
      
      meaning:
        "The register keyword creates register variables which are much faster than normal variables.",
      Button_link :<a href="https://www.geeksforgeeks.org/understanding-register-keyword/" class="button_lang">click</a>
    },   
    {
      id: 20,
     
      name: "return",
      
      meaning:
        "The return keyword terminates the function and returns the value.",
      Button_link :<a href="https://www.geeksforgeeks.org/return-statement-in-c-cpp-with-examples/" class="button_lang">click</a>
    },   
    {
      id: 21,
     
      name: "short",
      
      meaning:
        "The short, long, signed and unsigned keywords are type modifiers that alter the meaning of a base data type to yield a new type",
      Button_link :<a href="https://www.geeksforgeeks.org/maximum-value-of-unsigned-short-int-in-c/" class="button_lang">click</a>
    },   
    {
      id: 22,
     
      name: "signed",
      
      meaning:
        "The short, long, signed and unsigned keywords are type modifiers that alter the meaning of a base data type to yield a new type",
      Button_link :<a href="https://www.geeksforgeeks.org/basics-of-signed-binary-numbers-of-ranges-of-different-datatypes/" class="button_lang">click</a>
    },   
    {
      id: 23,
     
      name: "sizeof",
      
      meaning:
        "The sizeof keyword evaluates the size of data (a variable or a constant).",
      Button_link :<a href="https://www.geeksforgeeks.org/difference-between-sizeofint-and-sizeofint-in-c-c/" class="button_lang">click</a>
    },   
    {
      id: 24,
     
      name: "static",
      
      meaning:
        "The static keyword creates a static variable. The value of the static variables persists until the end of the program.",
      Button_link :<a href="https://www.geeksforgeeks.org/static-variables-in-c/" class="button_lang">click</a>
    },   
    {
      id: 25,
     
      name: "struct",
      
      meaning:
        "The struct keyword is used for declaring a structure. A structure can hold variables of different types under a single name.",
      Button_link :<a href="https://www.geeksforgeeks.org/structures-c/" class="button_lang">click</a>
    },   
    {
      id: 26,
     
      name: "switch",
      
      meaning:
        "The switch and case statement is used when a block of statements has to be executed among many blocks.",
      Button_link :<a href="https://www.geeksforgeeks.org/switch-statement-cc/" class="button_lang">click</a>
    },   
    {
      id: 27,
     
      name: "typedef",
      
      meaning:
        "The typedef keyword is used to explicitly associate a type with an identifier.",
      Button_link :<a href="https://www.geeksforgeeks.org/typedef-versus-define-c/" class="button_lang">click</a>
    },   
    {
      id: 28,
     
      name: "union",
      
      meaning:
        "A union is used for grouping different types of variables under a single name.",
      Button_link :<a href="https://www.geeksforgeeks.org/union-c/" class="button_lang">click</a>
    },   
    {
      id: 29,
     
      name: "unsigned",
      
      meaning:
        "The short, long, signed and unsigned keywords are type modifiers that alter the meaning of a base data type to yield a new type.",
      Button_link :<a href="https://www.geeksforgeeks.org/unsigned-char-in-c-with-examples/#:~:text=unsigned%20char%20is%20a%20character,ranges%20from%200%20to%20255." class="button_lang">click</a>
    },   
    {
      id: 30,
     
      name: "void",
      
      meaning:
        "The void keyword meaning nothing or no value.",
      Button_link :<a href="https://www.geeksforgeeks.org/void-pointer-c-cpp/#:~:text=A%20void%20pointer%20is%20a,be%20typcasted%20to%20any%20type.&text=Note%20that%20the%20above%20program,of%20malloc%20to%20(int%20*)." class="button_lang">click</a>
    },   
    {
      id: 31,
     
      name: "volatile",
      
      meaning:
        "The volatile keyword is used for creating volatile objects. A volatile object can be modified in an unspecified way by the hardware.",
      Button_link :<a href="https://www.geeksforgeeks.org/understanding-volatile-qualifier-in-c/" class="button_lang">click</a>
    },   
    {
      id: 32,
     
      name: "while",
      
      meaning:
        "The syntax of a while loop in C programming language is − while(condition) { statement(s); } Here, statement(s) may be a single statement or a block of statements. The condition may be any expression, and true is any nonzero value. The loop iterates while the condition is true",
      Button_link :<a href="https://www.geeksforgeeks.org/c-c-do-while-loop-with-examples/" class="button_lang">click</a>
    },  

    
  ];
  
  export default cpplang;
  