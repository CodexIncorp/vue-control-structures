<script setup>
import { ref } from "vue";
const visible = ref(true);
</script>

<template>
    <section>
        <h2>v-show</h2>
        <p>
            <code>v-show</code> alterna la visibilidad con CSS (<code>display: none</code>).
            El elemento <strong>siempre existe en el DOM</strong>; solo se oculta o se muestra.
            Es útil cuando se alterna con mucha frecuencia.
        </p>

        <h3>Estructura</h3>
        <pre v-pre>
            &lt;p v-show="visible"&gt;Ahora me ves&lt;/p&gt;
        </pre>

        <h3>Ejemplo en vivo</h3>
        <div class="ejemplo">
            <button @click="visible = !visible">
                {{ visible ? 'Ocultar' : 'Mostrar' }}
            </button>
            <p v-show="visible">Ahora me ves</p>
            <small>
                Inspecciona el elemento con F12: sigue en el DOM con <code>display: none</code>.
            </small>
        </div>
    </section>
</template>