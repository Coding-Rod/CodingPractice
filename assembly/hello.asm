section .data                       ; ; section .data -> data section (This section contains initialized data)
    msg db "Hello, World!", 0x0A    ; msg -> string to print, db -> define byte, 0x0A -> newline
    len equ $ - msg                 ; len -> length of the string, equ -> equate 
                                    ; $ -> current address, msg -> start address

section .text                       ; section .text -> code section (This section contains the code)    
    global _start                   ; global _start -> entry point for the linker (linker is the program that combines object files into an executable)
                                    ; _start -> label for the entry point
                                    ; global -> make the label visible to the linker
                                    
_start:                             ; entry point for the program
    ; Syscall: write (syscall number 1)
    mov rax, 1                      ; rax -> syscall number for sys_write, in this case 1
    mov rdi, 1                      ; rdi -> file descriptor 1 (stdout)
    mov rsi, msg                    ; rsi -> pointer to the string to print [msg => "Hello, World!"]
    mov rdx, len                    ; rdx -> length of the string to print, rdx m
    syscall                         ; call the kernel

    ; Syscall: exit (syscall number 60)
    mov rax, 60                     ; syscall: sys_exit
    xor rdi, rdi                    ; exit code 0
    syscall                         ; call the kernel
