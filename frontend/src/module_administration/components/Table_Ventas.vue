<script>
</script>

<template>
    <div class="row">
                <div class="row  title2">
                    <h1>Ventas realizadas</h1>
                </div>
                <div class="col">
                    <!-- tabla-->
                    <div class="row" id="tabla">
                        <div class="container pe-4 ps-4">
                            <div class="table-responsive">
                                <table class="table table-bordered border-dark border-5 ">
                                    <thead>
                                        <tr class="text-center">
                                            <th class="col-3">Número pedido</th>
                                            <th class="col-3">Descripción</th>
                                            <th class="col-3">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="body" v-for="item in algo" :key="item">
                                            <td v-text="item.numOrder"></td>
                                            <td v-text="item.description.toString()"></td>
                                            <td v-text="item.totalPayment"></td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th id="bordeTable"></th>
                                            <th class="bordeB">Cantidad Total</th>

                                            <th class="bordeB" v-text="consolidationTotal"></th>
                                        </tr>
                                    </tfoot>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</template>