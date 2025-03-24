// Declaración de paquete
package com.ejemplo.temavsc;

// Importaciones
import java.util.List;
import java.util.ArrayList;
import java.io.IOException;

// Declaración de un enum para ejemplos
enum Color {
    RED, GREEN, BLUE;
}

/**
 * Clase principal que muestra varios elementos de sintaxis en Java.
 */
public class EjemploSintaxis {

    // Campo de clase con inicialización
    private int numero = 42;

    // Constructor
    public EjemploSintaxis() {
        // Comentario dentro del constructor
        System.out.println("Constructor ejecutado");
    }

    // Método con anotación y manejo de excepciones
    @Override
    public String toString() {
        return "EjemploSintaxis{numero=" + numero + "}";
    }

    // Método principal con varios ejemplos de sintaxis
    public static void main(String[] args) {
        EjemploSintaxis ejemplo = new EjemploSintaxis();
        System.out.println(ejemplo.toString());

        // Estructura condicional if-else
        if (ejemplo.numero > 0) {
            System.out.println("Número positivo");
        } else {
            System.out.println("Número no positivo");
        }

        // Bucle for clásico
        for (int i = 0; i < 5; i++) {
            System.out.println("Iteración: " + i);
        }
        
        // Bucle while
        int contador = 0;
        while (contador < 3) {
            System.out.println("Contador: " + contador);
            contador++;
        }

        // Bucle do-while
        int doContador = 0;
        do {
            System.out.println("Do-While contador: " + doContador);
            doContador++;
        } while (doContador < 3);

        // Uso de switch-case
        String dia = "Lunes";
        switch (dia) {
            case "Lunes":
                System.out.println("Inicio de la semana");
                break;
            case "Viernes":
                System.out.println("Fin de la semana laboral");
                break;
            default:
                System.out.println("Otro día");
                break;
        }

        // Manejo de excepciones con try-catch-finally
        try {
            int division = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Excepción capturada: " + e.getMessage());
        } finally {
            System.out.println("Bloque finally ejecutado");
        }

        // Expresión lambda y uso de colecciones
        List<String> frutas = new ArrayList<>();
        frutas.add("Manzana");
        frutas.add("Banana");
        frutas.forEach(fruta -> System.out.println("Fruta: " + fruta));
    }

    // Método adicional para mostrar genéricos y colecciones
    public <T> void metodoGenerico(T parametro) {
        System.out.println("Parámetro genérico: " + parametro);
    }
}
