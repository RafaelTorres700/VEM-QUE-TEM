 const form = document.getElementById('eventForm');
        const successMessage = document.getElementById('successMessage');
        const horarioInicio = document.getElementById('horarioInicio');
        const horarioFinal = document.getElementById('horarioFinal');
        const timeInfo = document.getElementById('timeInfo');
        const eventDuration = document.getElementById('eventDuration');

        // Calcular duração do evento
        function calculateDuration() {
            const inicio = horarioInicio.value;
            const final = horarioFinal.value;

            if (inicio && final) {
                const [horaInicio, minInicio] = inicio.split(':').map(Number);
                const [horaFinal, minFinal] = final.split(':').map(Number);

                let totalMinInicio = horaInicio * 60 + minInicio;
                let totalMinFinal = horaFinal * 60 + minFinal;

                // Se horário final for menor, assume que é no dia seguinte
                if (totalMinFinal < totalMinInicio) {
                    totalMinFinal += 24 * 60;
                }

                const duracao = totalMinFinal - totalMinInicio;
                const horas = Math.floor(duracao / 60);
                const minutos = duracao % 60;

                eventDuration.textContent = `${horas}h${minutos > 0 ? ` ${minutos}min` : ''}`;
                timeInfo.style.display = 'block';
            } else {
                timeInfo.style.display = 'none';
            }
        }

        horarioInicio.addEventListener('change', calculateDuration);
        horarioFinal.addEventListener('change', calculateDuration);

        // Validação do formulário
        function validateField(field, errorElement) {
            if (!field.value.trim()) {
                field.parentElement.classList.add('error');
                errorElement.style.display = 'block';
                return false;
            } else {
                field.parentElement.classList.remove('error');
                errorElement.style.display = 'none';
                return true;
            }
        }

        // Submit do formulário
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            let isValid = true;

            // Validar campos obrigatórios
            const requiredFields = [
                { field: document.getElementById('nomeEstabelecimento'), error: document.getElementById('errorNomeEstabelecimento') },
                { field: document.getElementById('nomeEvento'), error: document.getElementById('errorNomeEvento') },
                { field: document.getElementById('horarioInicio'), error: document.getElementById('errorHorarioInicio') },
                { field: document.getElementById('horarioFinal'), error: document.getElementById('errorHorarioFinal') },
                { field: document.getElementById('enderecoCompleto'), error: document.getElementById('errorEnderecoCompleto') }
            ];

            requiredFields.forEach(({ field, error }) => {
                if (!validateField(field, error)) {
                    isValid = false;
                }
            });

            // Validar checkbox
            const checkbox = document.getElementById('confirmacaoSeguranca');
            if (!checkbox.checked) {
                isValid = false;
                alert('É necessário confirmar a responsabilidade pelo evento e segurança.');
            }

            if (isValid) {
                // Simular envio
                successMessage.style.display = 'block';
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000);

                // Aqui você adicionaria a lógica real de envio
                console.log('Formulário enviado com sucesso!');
            }
        });

        // Reset do formulário
        form.addEventListener('reset', function() {
            // Limpar classes de erro
            document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
            document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
            timeInfo.style.display = 'none';
            successMessage.style.display = 'none';
        });
