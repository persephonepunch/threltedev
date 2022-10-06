<script lang="ts">
  import { Canvas } from "@threlte/core";
  import Scene from "./Scene.svelte";
</script>

<div>
  <Canvas size={{ width: 1280, height: 720 }}>      
    <Scene />
  </Canvas>
</div>

<style>
  div {
    height: 100%;
    width: 100%;
  }
</style>