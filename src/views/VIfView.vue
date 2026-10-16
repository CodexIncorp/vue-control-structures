<script setup>
import { ref } from "vue";
const nota = ref(75);
</script>

<template>
    <section>
        <h2>v-if / v-else-if / v-else</h2>
        <p>
            Estas directivas renderizan un bloque <strong>solo si</strong> se cumple
            la condición. Si no se cumple, el elemento
            <strong>no existe en el DOM</strong>. Deben estar en elementos
            consecutivos (hermanos).
        </p>

        <h3>Estructura</h3>
        <pre v-pre>
        &lt;p v-if="nota &gt;= 90"&gt;Excelente&lt;/p&gt;
        &lt;p v-else-if="nota &gt;= 60"&gt;Aprobado&lt;/p&gt;
        &lt;p v-else&gt;Reprobado&lt;/p&gt;
        </pre>

        <h3>Ejemplo en vivo</h3>
        <div class="ejemplo">
            <label>
                Calificación
                <input type="number" v-model.number="nota" min="0" max="100" />
            </label>
            <p v-if="nota >= 90">Excelente</p>
            <p v-else-if="nota >= 60">Aprobado</p>
            <p v-else>Reprobado</p>
        </div>
    </section>
</template>
