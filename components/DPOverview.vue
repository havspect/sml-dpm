<script setup>
import { useData } from 'vitepress'

const { page } = useData()

let stakeholderMapping = {
    "B": "Business Stakeholder",
    "D": "Domain Expert",
    "M": "ML Development",
    "S": "Software Development",
    "AT": "Auditing & Testing"
};

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
            <td>{{ page.frontmatter["ml-development-stakeholders"].map(e => stakeholderMapping[e]).join(", ") }}</td>
        </tr>
    </table>
</template>
