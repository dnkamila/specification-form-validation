$(document).ready(() => {
  $('#productAttributeNames').change(() => {
    let id = $('#productAttributeNames option:selected').val()

    $.get(`/api/product-attribute/${id}`, (data) => {
      console.log('form-vendor.js', data)
      $('#formVendorContent').empty()
      $('#formVendorContent').append(`<input type="hidden" name="productAttributeId" value="${id}">`)
      $.each(data.attribute, (key, values) => {
        let selectName = `<label for="attribute_${key}">${key}</label>`
        let selectHeader = `<select name="attribute_${key}">`
        let selectContent = ''
        $.each(values, (index, value) => {
          selectContent = `${selectContent}<option value="${value}">${value}</option>`
        })
        let selectFooter = '</select>'

        $('#formVendorContent').append(`${selectName + selectHeader + selectContent + selectFooter}<br>`)
      })
      $('#formVendorContent').append('<input type="submit" value="Submit">')
    })
  })
})
