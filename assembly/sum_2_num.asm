section .data
    ; This section contains initialized data (constants).
    prompt1 db "Enter the first number: ", 0 ; A null-terminated string to prompt the user for the first number.
    prompt2 db "Enter the second number: ", 0 ; A null-terminated string to prompt the user for the second number.
    result_msg db "The sum is: ", 0 ; A null-terminated string to display the result message.
    newline db 10, 0 ; A newline character "\n" (ASCII 10) followed by a null terminator.
    len equ $ - prompt1 ; Calculate the length of the prompt1 string.
    len2 equ $ - prompt2 ; Calculate the length of the prompt2 string.

section .bss ; bss stands for Block Started by Symbol
    ; This section contains uninitialized data (variables).
    num1 resb 4 ; Reserve 4 bytes for the first number. Equivalent to `int` in C.
    num2 resb 4 ; Reserve 4 bytes for the second number.
    sum resb 4 ; Reserve 4 bytes for the sum.

section .text
    ; This section contains the executable code.
    global _start ; Declare the entry point of the program.

_start:
    ; Prompt for the first number
    mov eax, 4 ; System call number for `sys_write` (write to a file descriptor).
    mov ebx, 1 ; File descriptor 1 (standard output).
    mov ecx, prompt1 ; Address of the prompt1 string.
    mov edx, 24 ; Length of the prompt1 string.
    int 0x80 ; Trigger the system call.

    ; Read the first number
    mov eax, 3 ; System call number for `sys_read` (read from a file descriptor).
    mov ebx, 0 ; File descriptor 0 (standard input).
    mov ecx, num1 ; Address of the buffer to store the input.
    mov edx, 4 ; Maximum number of bytes to read.
    int 0x80 ; Trigger the system call.

    ; Convert first number from ASCII to integer
    mov eax, dword [num1] ; Load the first number (ASCII) into EAX.
    sub eax, '0' ; Subtract ASCII value of '0' to convert to an integer.
    mov dword [num1], eax ; Store the integer back into num1.

    ; Prompt for the second number
    mov eax, 4 ; System call number for `sys_write`.
    mov ebx, 1 ; File descriptor 1 (standard output).
    mov ecx, prompt2 ; Address of the prompt2 string.
    mov edx, 25 ; Length of the prompt2 string.
    int 0x80 ; Trigger the system call.

    ; Read the second number
    mov eax, 3 ; System call number for `sys_read`.
    mov ebx, 0 ; File descriptor 0 (standard input).
    mov ecx, num2 ; Address of the buffer to store the input.
    mov edx, 4 ; Maximum number of bytes to read.
    int 0x80 ; Trigger the system call.

    ; Convert second number from ASCII to integer
    mov eax, dword [num2] ; Load the second number (ASCII) into EAX.
    sub eax, '0' ; Subtract ASCII value of '0' to convert to an integer.
    mov dword [num2], eax ; Store the integer back into num2.

    ; Perform the addition
    mov eax, dword [num1] ; Load the first number into EAX.
    add eax, dword [num2] ; Add the second number to EAX.
    mov dword [sum], eax ; Store the result in the sum variable.

    ; Convert the sum to ASCII
    add eax, '0' ; Add ASCII value of '0' to convert the integer to ASCII.
    mov [sum], eax ; Store the ASCII result in the sum variable.

    ; Print the result message
    mov eax, 4 ; System call number for `sys_write`.
    mov ebx, 1 ; File descriptor 1 (standard output).
    mov ecx, result_msg ; Address of the result_msg string.
    mov edx, 13 ; Length of the result_msg string.
    int 0x80 ; Trigger the system call.

    ; Print the sum
    mov eax, 4 ; System call number for `sys_write`.
    mov ebx, 1 ; File descriptor 1 (standard output).
    mov ecx, sum ; Address of the sum variable (ASCII value).
    mov edx, 1 ; Length of the sum (1 character).
    int 0x80 ; Trigger the system call.

    ; Print a newline
    mov eax, 4 ; System call number for `sys_write`.
    mov ebx, 1 ; File descriptor 1 (standard output).
    mov ecx, newline ; Address of the newline character.
    mov edx, 1 ; Length of the newline (1 character).
    int 0x80 ; Trigger the system call.

    ; Exit
    mov eax, 1 ; System call number for `sys_exit`.
    xor ebx, ebx ; Set exit code to 0.
    int 0x80 ; Trigger the system call.