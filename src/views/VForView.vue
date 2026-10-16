<script setup>
import { ref } from "vue";

const frutas = ref(["Manzana", "Banana", "Cereza", "Durazno"]);
const nueva = ref("");

function agregar() {
    if (nueva.value.trim()) {
        frutas.value.push(nueva.value.trim());
        nueva.value = "";
    }
}
</script>

<template>
    <section>
        <h2>v-for</h2>
        <p>
            <code>v-for</code> repite un elemento por cada ítem de un arreglo u objeto.
            La sintaxis es <code>(item, index) in lista</code>.
        </p>

        <h3>Estructura</h3>
        <pre v-pre>
            &lt;ul&gt;
            &lt;li v-for="(fruta, index) in frutas"&gt;
            {{ index + 1 }}. {{ fruta }}
            &lt;/li&gt;
            &lt;/ul&gt;
        </pre>

        <h3>Ejemplo en vivo</h3>
        <div class="ejemplo">
            <input v-model="nueva" @keyup.enter="agregar" placeholder="Nueva fruta" />
            <button @click="agregar">Agregar</button>

            <ul>
                <li v-for="(fruta, index) in frutas" :key="fruta">
                    {{ index + 1 }}. {{ fruta }}
                </li>
            </ul>
        </div>
    </section>
</template>