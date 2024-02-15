<script setup>
import { useData } from 'vitepress'

const { page } = useData()
</script>

<template>
    <table>
        <tr>
            <td>Sustainability Dimension</td>
            <td>{{ page.frontmatter["sustainability-dimension"] }}</td>
        </tr>
        <tr>
            <td>ML Development Phase</td>
            <td>{{ page.frontmatter["ml-development-phase"] }}</td>
        </tr>
        <tr>
            <td>ML Development Stakeholders</td>
            <td>{{ page.frontmatter["ml-development-stakeholders"] }}</td>
        </tr>
    </table>
</template>
