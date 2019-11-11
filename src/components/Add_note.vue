<template>
  <div class="addnote">
    <v-container fluid>
      <v-card class="mx-auto" max-width="600px" max-height="300px">
        <v-card-title class="teal--text text--darken-2">Create your note</v-card-title>
        <v-form class="px-3">
          <v-text-field
            name="title"
            label="Title"
            color="teal darken-2"
            >
          </v-text-field>

          <v-textarea
          name="addNotes"
          label="Add Note"
          color="teal darken-2"
          >
        </v-textarea>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>
