<script setup>
import { ref } from "vue";

const tareas = ref([
    { id: 1, texto: "Aprender v-if" },
    { id: 2, texto: "Aprender v-for" },
    { id: 3, texto: "Aprender :key" },
]);

function eliminar(id) {
    tareas.value = tareas.value.filter((t) => t.id !== id);
}
</script>

<template>
    <section>
        <h2>v-bind:key (dentro de un bucle)</h2>
        <p>
            El atributo <code>key</code> le da a cada elemento de un <code>v-for</code> una
            identidad <strong>única y estable</strong>. Así Vue sabe qué elemento cambió,
            se movió o se eliminó, y reutiliza el DOM correctamente. Usa un
            <code>id</code> único, <strong>no</strong> el índice.
        </p>

        <h3>Estructura</h3>
        <pre v-pre>
            &lt;li v-for="tarea in tareas" :key="tarea.id"&gt;
            {{ tarea.texto }}
            &lt;/li&gt;
        </pre>
        <p>
            <code>:key</code> es la forma abreviada de <code>v-bind:key</code>.
        </p>

        <h3>Ejemplo en vivo</h3>
        <div class="ejemplo">
            <ul>
                <li v-for="tarea in tareas" :key="tarea.id">
                    {{ tarea.texto }}
                    <button @click="eliminar(tarea.id)">Eliminar</button>
                </li>
            </ul>
            <p v-if="tareas.length === 0">No quedan tareas!!!</p>
        </div>
    </section>
</template>