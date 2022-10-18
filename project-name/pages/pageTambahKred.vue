<template>
  <div>
    <Navbar></Navbar>
    <b-container class="border border-5 rounded mt-4">
      <!-- Header -->
      <b-row class="bg-secondary mb-4">
        <CustomHeader class="p-2 pl-3 pt-3" />
      </b-row>
      <!-- Hero -->
      <!-- Jenis Kreditor -->
      <b-row class="mb-4">
        <b-col sm="3 d-flex justify-content-end pr-4 align-items-center">
          <label for="select-jenisKred">Jenis Kreditor:</label>
        </b-col>

        <b-col sm="7">
          <b-form-select
            id="select-jenisKred"
            :options="optionsJenis"
            v-model="form.jenisKred"
          >
          </b-form-select>
        </b-col>
      </b-row>
      <!-- Nama Kreditor -->
      <b-row class="mb-4">
        <b-col sm="3 d-flex justify-content-end pr-4 align-items-center">
          <label for="input-namaKred">Nama Kreditor:</label>
        </b-col>

        <b-col sm="7">
          <b-form-input
            type="text"
            id="input-namaKred"
            v-model="form.nama"
            required
          ></b-form-input>
        </b-col>
      </b-row>
      <!-- Alamat Kreditor -->
      <b-row class="mb-4">
        <b-col sm="3 d-flex justify-content-end pr-4 align-items-center">
          <label for="input-alamatKred">Alamat Kreditor:</label>
        </b-col>

        <b-col sm="7">
          <b-form-textarea
            type="text"
            id="input-alamatKred"
            v-model="form.alamatKred"
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-col>
      </b-row>
      <!-- Nama Kuasa -->
      <b-row class="mb-4">
        <b-col sm="3 d-flex justify-content-end pr-4 align-items-center">
          <label for="input-namaKuasa">Nama Kuasa / Kuasa Hukum:</label>
        </b-col>

        <b-col sm="7">
          <b-form-input
            type="text"
            id="input-namaKuasa"
            v-model="form.namaKuasa"
          ></b-form-input>
        </b-col>
      </b-row>
      <!-- Alamat Korespondensi -->
      <b-row class="mb-4">
        <b-col sm="3 d-flex justify-content-end pr-4 align-items-center">
          <label for="input-alamatKores">Alamat Korespondensi:</label>
        </b-col>

        <b-col sm="7">
          <b-form-textarea
            type="text"
            id="input-alamatKores"
            v-model="form.alamatKores"
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-col>
      </b-row>
      <!-- Nomor HP -->
      <b-row class="mb-4">
        <b-col sm="3 d-flex justify-content-end pr-4 align-items-center">
          <label for="input-noHP">Nomor Telepon / HP:</label>
        </b-col>

        <b-col sm="7">
          <b-form-input
            type="number"
            id="input-noHP"
            v-model="form.noHP"
          ></b-form-input>
        </b-col>
      </b-row>
      <!-- Email Kreditor -->
      <b-row class="mb-4">
        <b-col sm="3 d-flex justify-content-end pr-4 align-items-center">
          <label for="input-emailKred">Email Kreditor:</label>
        </b-col>

        <b-col sm="7">
          <b-form-input
            type="email"
            id="input-emailKred"
            v-model="form.email"
          ></b-form-input>
        </b-col>
      </b-row>
      <!-- Tipe Tagihan -->
      <b-row class="mb-4">
        <b-col sm="3 d-flex justify-content-end pr-4 align-items-center">
          <label for="radio-tipe">Tipe Tagihan:</label>
        </b-col>

        <b-col sm="7">
          <b-form-radio-group
            id="radio-tipe"
            :options="optionsTipe"
            name="radio-tipe"
            v-model="form.tipe"
          ></b-form-radio-group>
        </b-col>
      </b-row>

      <!-- Lampiran-->
      <b-row class="mb-4 mt-5">
        <b-col sm="3 d-flex justify-content-end p-0 align-items-center"><h3>Lampiran</h3></b-col>
      </b-row>

      <div v-for="(item, index) in form.lampiran" :key="index">
        <b-row class="mb-4">
          <b-col sm="3" class="d-flex justify-content-end p-0" v-if="item.editable === false">
            <label @click="item.editable = true">{{ item.label }}</label>
          </b-col>

          <b-col sm="3" v-else class="d-flex justify-content-end p-0">
            <b-input-group style="max-width:16rem">
              <b-input-group-append>
                <b-button 
                variant="outline-success" 
                @click="item.editable=false"
                >Save
                </b-button>
              </b-input-group-append>
              <b-form-input type="text" v-model="item.label" required></b-form-input>
            </b-input-group>

            
          </b-col>

          <b-col sm="1" class="d-flex justify-content-center">
            <b-form-checkbox :id="'input-' + index" v-model="item.check" class="p-0 ml-4">
            </b-form-checkbox>
          </b-col>

          <b-col sm="6">
            <b-form-input
              type="text"
              id="keterangan-spt"
              v-model="item.keterangan"
            ></b-form-input>
          </b-col>
        </b-row>
      </div>

      <!-- +Tambah dokumen-->
      <b-row class="mb-4">
        <b-col cols="3 d-flex justify-content-end p-0">
          <b-button @click="tambah"> Tambah </b-button>
        </b-col>
      </b-row>
      <!--   -->

      <!-- Back and Save-->
      <b-row class="mb-4">
        <b-col sm="3 d-flex justify-content-end p-0">
          <a href="/">
            <b-button variant="danger">Back</b-button>
          </a>
        </b-col>
        <b-col sm="7 d-flex justify-content-end p-0">
          <b-button variant="primary">Save</b-button>
        </b-col>
      </b-row>
      <!-- Hero -->
    </b-container>
    {{ form }}
  </div>
</template>
  
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'pagetambahkred',
  components: {},
  data() {
    return {
      optionsJenis: [
        { value: null, text: 'Silahkan pilih jenis Kreditor' },
        { value: 'Perorangan', text: 'Perorangan' },
        { value: 'Instansi/Perusahaan', text: 'Instansi / Perusahaan' },
      ],
      form: {
        jenisKred: null,
        nama: '',
        alamatKred: '',
        namaKuasa: '',
        alamatKores: '',
        noHP: '',
        email: '',
        tipe: '',
        lampiran: [
          {
            check: false,
            keterangan: '',
            label: 'Surat Permohonan Tagihan',
            editable: false,
          },
          {
            check: false,
            keterangan: '',
            label: 'Fotocopy KTP Kreditor',
            editable: false,
          },
          {
            check: false,
            keterangan: '',
            label: 'Surat Kuasa',
            editable: false,
          },
          {
            check: false,
            keterangan: '',
            label: 'Fotocopy KTP Kuasa',
            editable: false,
          },
        ],
      },
      optionsTipe: [
        { text: 'Separatis', value: 'Separatis' },
        { text: 'Preferen', value: 'Preferen' },
        { text: 'Konkuren', value: 'Konkuren' },
      ],
    }
  },
  methods: {
    tambah() {
      this.form.lampiran.push({
        check: false,
        keterangan: '',
        label: '',
        editable: true,
      })
    }
  },
})
</script>
  
<style scoped>
b-container {
  background-color: blue;
}
.box {
  background-color: aquamarine;
  border: 1px solid rebeccapurple;
  min-height: 3rem;
}
</style>
  