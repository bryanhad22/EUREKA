<template>
    <b-card-group deck>
        <!-- Jumlah Kreditor -->
        <b-card header="Jumlah Kreditor" header-text-variant="dark" text-variant="primary" header-tag="header" :title="totalJumlahKreditor" class="card-custom">
        </b-card>
        <!-- Jumlah Tagihan -->
        <b-card header="Jumlah Tagihan" header-text-variant="dark" text-variant="primary"  header-tag="header" :title="totalJumlahTagihan" class="card-custom">
        </b-card>
        <!-- Performa Harian -->
        <b-card header="Performa Harian" header-text-variant="dark" text-variant="primary"  header-tag="header" :title="totalJumlah" class="card-custom">
        </b-card>
    </b-card-group>
</template>

<script>
export default {
    name : "summarydata",
    props: {
    },
    data() {
        return {
            totalJumlahKreditor: 22,
            totalJumlahTagihan: "Rp 500.000.000,-"
        }
    }
}
</script>

<style scoped>
.card-custom {
    background-color: white;
    min-width: 18rem;
    text-align: center;
    border: 1px solid blue;
    color: blue;
}


</style>