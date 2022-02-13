<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item text-primary">
                            <router-link to="/" class="nav-link">Go to Home</router-link>
                    </li>
                    <li class="nav-item">
                            <router-link to="/test" class="nav-link">Test</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <router-view></router-view>
</div>
</template>
<script>
import { reactive } from 'vue'
import { useMouse, usePreferredDark, useLocalStorage, useOnline, useBrowserLocation } from '@vueuse/core'
import { UseOnline, UseBrowserLocation } from '@vueuse/components';
import { useGeolocation } from '@vueuse/core';

export default {
    components:[UseOnline, UseBrowserLocation],


    setup() {
        // tracks mouse position
        const { x, y } = useMouse()

        // is user prefers dark theme
        const isDark = usePreferredDark()
        const online = useOnline()
        const location = useBrowserLocation()
        const { coords, locatedAt, error } = useGeolocation()




        // persist state in localStorage
        const store = useLocalStorage(
            'my-storage',
            {
                name: 'Apple',
                color: 'red',
            },
        )

        return { x, y, isDark, store ,online, location, coords,locatedAt, error}
    }
}
</script>
