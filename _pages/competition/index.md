---
layout: competition
id: competition
nav: true
nav-order: 5

title: Competition
long-title: Win a luxurious winter staycation at the gorgeous Bovey Castle
intro: Take the family for two nights in the grounds of the Bovey Castle Estate, keeping the cold at bay in one of the five-star private lodges that dot the beautiful grounds. The lodge is every bit as breathtaking as the views, typical of the wild Dartmoor countryside that surrounds Bovey. To complete your winter escape, wrap up with a £500 spend at FatFace, plus a host of incredible outdoor activities.
enter-cta: Enter Now

features:

  - id: hotel
    title: The Stay
    description: Bovey Castle is a regal estate packed with classic charm. In the woodland and landscaped grounds, your five-star lodge offers sumptuous luxury, with a roaring fire to fend off the chill. You and your family will enjoy a deer park tour, an archery session, and a delicious night in the Smith’s Brasserie.

  - id: voucher
    title: The Look
    description: Layer up for your winter getaway with FatFace. With a range of cold-weather staples to fill your suitcase with, enjoy your £500 spend with FatFace and get the winter look for your opulent getaway.

competition-form:
  id: comp
  post-url: https://getform.io/f/a670ce4f-62a9-45f0-a5e6-44bf2c65756f
  expiry-date: 2050-01-01
  fields:
    - id: name
      type: text
      label: Name
      required: true
    - id: email
      type: email
      label: Email
      required: true
    - id: qualify
      type: radio
      label: Are you a UK resident and over the age of 18?
      required: true
      options:
        - id: qualify-true
          label: 'Yes'
          value: 'yes'
        - id: qualify-false
          label: 'No'
          value: 'no'
          invalid: true
    - id: opt-in
      type: radio
      label: Would you like to receive emails with exclusive offers and early sale access from FatFace? (you can unsubscribe at any time)
      required: true
      options:
        - id: opt-in-true
          label: 'Yes'
          value: 'yes'
        - id: opt-in-false
          label: 'No'
          value: 'no'
  submit: Submit Entry
  terms: >
    By submitting your entry, you agree to the <a href="#" class="js-open-modal link--underlined" data-open-modal="competition-terms">terms and conditions</a> of this competition
---