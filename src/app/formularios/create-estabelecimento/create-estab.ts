const form = document.getElementById('establishmentForm');
        const successMessage = document.getElementById('successMessage');
        const submitBtn = document.getElementById('submitBtn');
        const fileInput = document.getElementById('fotos');
        const fileLabel = document.getElementById('fileLabel');
        const filesPreview = document.getElementById('filesPreview');
        let selectedFiles = [];

        // Máscaras de input
        const cnpjInput = document.getElementById('cnpj');
        const telefoneInput = document.getElementById('telefone');

        cnpjInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/^(\d{2})(\d)/, '$1.$2');
            value = value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
            value = value.replace(/\.(\d{3})(\d)/, '.$1/$2');
            value = value.replace(/(\d{4})(\d)/, '$1-$2');
            e.target.value = value;
        });

        telefoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/^(\d{2})(\d)/, '($1) $2');
            value = value.replace(/(\d)(\d{4})$/, '$1-$2');
            e.target.value = value;
        });

        // Validação em tempo real
        const inputs = form.querySelectorAll('input[required], select[required]');

        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearError);
        });

        function validateField(e) {
            const field = e.target;
            const fieldGroup = field.closest('.campo-group') || field.closest('.form-group') || field.closest('.checkbox-row');
            const errorMessage = fieldGroup.querySelector('.error-message');

            if (field.type === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(field.value)) {
                    showError(fieldGroup, errorMessage);
                    return false;
                }
            }

            if (field.name === 'cnpj') {
                const cnpjValue = field.value.replace(/\D/g, '');
                if (cnpjValue.length !== 14) {
                    showError(fieldGroup, errorMessage);
                    return false;
                }
            }

            if (field.name === 'senha' && field.value.length < 6) {
                showError(fieldGroup, errorMessage);
                return false;
            }

            if (field.required && !field.value.trim()) {
                showError(fieldGroup, errorMessage);
                return false;
            }

            clearError({ target: field });
            return true;
        }

        function showError(fieldGroup, errorMessage) {
            fieldGroup.classList.add('error');
            if (errorMessage) {
                errorMessage.style.display = 'block';
            }
        }

        function clearError(e) {
            const fieldGroup = e.target.closest('.campo-group') || e.target.closest('.form-group') || e.target.closest('.checkbox-row');
            const errorMessage = fieldGroup.querySelector('.error-message');

            fieldGroup.classList.remove('error');
            if (errorMessage) {
                errorMessage.style.display = 'none';
            }
        }

        // Upload de arquivos
        fileInput.addEventListener('change', function(e) {
            const files = Array.from(e.target.files);

            if (files.length > 5) {
                alert('Máximo de 5 fotos permitidas!');
                return;
            }

            selectedFiles = files;
            updateFilePreview();
        });

        function updateFilePreview() {
            filesPreview.innerHTML = '';

            if (selectedFiles.length === 0) {
                fileLabel.textContent = '📷 Clique para selecionar até 5 fotos do estabelecimento';
                fileLabel.classList.remove('has-files');
            } else {
                fileLabel.textContent = `${selectedFiles.length} foto(s) selecionada(s)`;
                fileLabel.classList.add('has-files');

                selectedFiles.forEach((file, index) => {
                    const filePreview = document.createElement('div');
                    filePreview.className = 'file-preview';
                    filePreview.innerHTML = `
                        📸 ${file.name}
                        <button type="button" class="remove-file" onclick="removeFile(${index})">×</button>
                    `;
                    filesPreview.appendChild(filePreview);
                });
            }
        }

        function removeFile(index) {
            selectedFiles.splice(index, 1);
            updateFilePreview();
        }

        // Submissão do formulário
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            let isValid = true;
            inputs.forEach(input => {
                if (!validateField({ target: input })) {
                    isValid = false;
                }
            });

            if (isValid) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Cadastrando...';

                // Simular envio
                setTimeout(() => {
                    successMessage.style.display = 'block';
                    form.reset();
                    selectedFiles = [];
                    updateFilePreview();
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Cadastrar Estabelecimento';

                    // Esconder mensagem após 5 segundos
                    setTimeout(() => {
                        successMessage.style.display = 'none';
                    }, 5000);
                }, 1500);
            }
        });

        // Reset do formulário
        form.addEventListener('reset', function() {
            inputs.forEach(input => {
                clearError({ target: input });
            });
            selectedFiles = [];
            updateFilePreview();
            successMessage.style.display = 'none';
        });
