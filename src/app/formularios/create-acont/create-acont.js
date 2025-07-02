
        const form = document.getElementById('userForm');
        const successMessage = document.getElementById('successMessage');

        // Validação em tempo real
        const inputs = form.querySelectorAll('input[required], select[required]');

        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearError);
        });

        function validateField(e) {
            const field = e.target;
            const fieldGroup = field.closest('.campo-group') || field.closest('.checkbox-row');
            const errorMessage = fieldGroup.querySelector('.error-message');

            if (field.type === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(field.value)) {
                    showError(fieldGroup, errorMessage);
                    return false;
                }
            }

            if (field.name === 'senha' && field.value.length < 6) {
                showError(fieldGroup, errorMessage);
                return false;
            }

            if (field.name === 'confirmarSenha') {
                const senha = document.getElementById('senha').value;
                if (field.value !== senha) {
                    showError(fieldGroup, errorMessage);
                    return false;
                }
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
            const fieldGroup = e.target.closest('.campo-group') || e.target.closest('.checkbox-row');
            const errorMessage = fieldGroup.querySelector('.error-message');

            fieldGroup.classList.remove('error');
            if (errorMessage) {
                errorMessage.style.display = 'none';
            }
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
                // Simular envio
                setTimeout(() => {
                    successMessage.style.display = 'block';
                    form.reset();

                    // Esconder mensagem após 5 segundos
                    setTimeout(() => {
                        successMessage.style.display = 'none';
                    }, 5000);
                }, 500);
            }
        });

        // Reset do formulário
        form.addEventListener('reset', function() {
            inputs.forEach(input => {
                clearError({ target: input });
            });
            successMessage.style.display = 'none';
        });
    
